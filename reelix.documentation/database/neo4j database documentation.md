# Neo4j video recommendations

## Ideas

The project uses 2 databases.
Most data is stored in a **MySQL database**.  
Neo4j stores data related to **calculating media recommendations**, per user.  
Media can be both **movies** and **series**. Not individual series episodes or seasons.  
All data in neo4j should be used to calculate recommendations, to provide the best results.  
Names are also stored in neo4j, to make it easier to read the data.  
Neo4j gets its **string datatype IDs** from MySQL. They are **UUID's**.

The **recommendation algorithm** should be able to **adapt to individual users**, and pick up on **changing interests**.  
So if a user never showed interest in animation, but suddenly started watching it, then it should experiment with showing animation media recommendations.  
If the experiment is successful, then it will adapt and know that the user likes animation, and perhaps likes something else less now.  
The algorithm will be doing **automatic A/B testing**, like that.

### Age restrictions

A user can has an **age restriction**.  
If a movie has a higher age rating, than the users age restriction, then **it will not be recommended to that user**.  
A user can have no relationship to an age rating system, which would mean that they are not restricted by any media age ratings.

The database only stores **a single age rating system**, which is determined by an **administrator**, in the **front-end settings**.  
An overlap can occur, due to **migrating to a new age rating system**.  
In which case, the old age rating system will be **removed** from the database, after migration.

### Media Library restrictions

The user might **not have access** to a specific **media library**.  
If this is the case, then they **will not be shown media**, which are located within that media library.

### Movie ratings

Media will have ratings from external sources, such as **rotten tomatoes** and **IMDb**.

### Media release year

The release year could be used, in case a user is more into **old media** or **new media**.

### Tags and genres

Media can have **multiple tags and genres**. **Users have relationships with tags and genres**.  
Users preferred tags and genres **can change over time** and it will be updated in the database.

### Watch list

Users can **add media to their watch list**.  
If a movie is on a watch list, **it is likely to get recommended**.  
Media like it, **similar tags and genres**, can also be recommended.

### Language

Users might want to watch media with **specific audio languages** and **specific subtitle languages**.  
Audio language might also be more important than subtitle language (or vice versa).  
A user has **importance attributes**, to figure out which is important to them.  
Relationships to language nodes are also used, to figure out the users **engagement to specific languages**.

### Watched media

A user can have fully watched media or only partially. This will be stored as a **percentage**.  
Media can also be watched multiple times. It could be 200% watched, if the media was fully watched twice.  
If the user watched the whole movie/series, then its likely to be interesting to that user.  
If they did not watch much, then its likely not something for them.

A date will also be stored, of when the user stopped watching.  
This is to know if its just a short break, to an otherwise interesting movie.  
If the date is long ago, then its unlikely that the user will return to it. Not a good match for the user.

### Media contributors

Contributors can be **writers**, **actors**, **directors**, etc.  
A user might like a specific one of those and would be likely to watch another movie or series that they are part of.

### User ratings

Users can provide a **thumbs up** or **thumbs down** to movies or series.

## Nodes

### User node

userId **STRING** // UUID from MySQL  
username **STRING**  
ageRestriction **INT**  
audioImportance **FLOAT**  
subtitleImportance **FLOAT**  

### Media node

mediaId **STRING** // UUID from MySQL  
title **STRING**  
releaseYear **INT**  
mediaType **STRING** // Series or movie

The media node has **multiple labels**.
These are **Movie:Media** and **Series:Media**.

### Tags node

tagId **INT**  
name **STRING**

### Genres node

genreId **INT**  
name **STRING**

### Media contributors node

mediaContributorId **STRING** // UUID from MySQL  
name **STRING**

### External ratings node

externalRatingsId **INT**  
source **STRING** // e.g. IMDb  
maxScore **FLOAT**

### Language node

languageId **INT**  
name **STRING**

### Age rating node

ageRatingId **INT**  
ageRatingSystem: **STRING** // e.g. MPAA  
rating **STRING** // e.g. PG-13  
ageRestriction **INT**

### Media libraries node

mediaLibraryId **STRING** // UUID from MySQL  
mediaLibraryName **STRING**  
mediaLibraryType **STRING** // Movies or series

## Relationships

### User relationships

#### Media libraries

```cypher
(user)-[:HAS_ACCESS_TO {updatedAt: DATETIME}]->(mediaLibrary)
```

Some media libraries might **not be accessible to all users**.  
If a user has a relationship to a media library, then they are allowed to watch media from that library.  
Otherwise, the media is off limits to that specific user.

#### Age restrictions

```cypher
(user)-[:HAS_AGE_RESTRICTION {updatedAt: DATETIME}]->(ageRating)
```

A user has a relationship to an ageRating node.  
The ageRating node has a property called "**ageRestriction**".  
The user will only get **recommended media which has the same ageRestriction, or below**.

#### Wants to watch

```cypher
(user)-[:WANTS_TO_WATCH {addedAt: DATETIME}]->(media)
```

A user adds media to their watchlist.  
Recommendations are **influenced by the date on media was added to the watch list**.  
if it was added to the watchlist long ago, then it probably isn't super interesting anymore.

#### Watched

```cypher
(user)-[:WATCHED {watchCount: FLOAT, firstWatchedAt DATETIME, lastWatchedAt: DATETIME, averageDaysBetweenWatch: FLOAT}]->(media)
```

Tracks which movies or series that a user has **watched recently and in total**.  
Helps to **not recommend the same media**, that a user has just consumed.  
But a user might also have **media that they like to watch a lot**.

#### Rated

```cypher
(user)-[:RATED {score: INT, ratedAt: DATETIME}]->(media)
```

A user can **rate movies**. The score is either **-1 for dislike** or **1 for like**.  
If a user removes a like or dislike, the relationship is removed. There is no **0** value, for liking.  
The datetime is also relevant to recommendations. A new like is "**worth**" more than an old like, from years ago.

#### Tags and Genres

```cypher
(user)-[:ENGAGES_WITH_TAG {score: FLOAT, watchCount: INT, lastUpdated: DATETIME}]->(tag)
(user)-[:ENGAGES_WITH_GENRE {score: FLOAT, watchCount: INT, lastUpdated: DATETIME}]->(genre)
```

Tags and genres work in the same way, in terms of relationship from the user to their respective node (tag or genre).  
**A decaying score from 0 to 100**, which indicates how much they like the tag or genre.  
The **watch count indicates how much media a user has consumed**, with the given tag or genre.  
lastUpdated indicates **when a user last watched media** with the given tag or genre.

#### Contributors - Actors, directors and writers

```cypher
(user)-[:ENGAGES_WITH_ACTOR {score: FLOAT, watchCount: INT, lastUpdated: DATETIME}]->(mediaContributor)
(user)-[:ENGAGES_WITH_DIRECTOR {score: FLOAT, watchCount: INT, lastUpdated: DATETIME}]->(mediaContributor)
(user)-[:ENGAGES_WITH_WRITER {score: FLOAT, watchCount: INT, lastUpdated: DATETIME}]->(mediaContributor)
```

The media contributors share the same concept as tags and genres.  
**A score which decays over time**. Max score is 100, minimum score is 0.  
The total times watched of media **which a contributor is part of**.  
A datetime which indicates **when the user last watched media in which the contributor is part of**.

#### Language - audio and subtitles

```cypher
(user)-[:ENGAGES_WITH_AUDIO_LANGUAGE {score: FLOAT, watchCount: INT, lastUpdated: DATETIME}]->(language)
(user)-[:ENGAGES_WITH_SUBTITLE_LANGUAGE {score: FLOAT, watchCount: INT, lastUpdated: DATETIME}]->(language)
```

A user should be recommended **the language that they prefer to hear or read**.  
If a user **does not** engage with X-language content, then a user **should be recommended** Y-language content instead of X-language.  
The recommendation algorithm uses **both the relationship** and **2 float values**, stored on the user node, which **stores the importance of subtitles vs audio**.

### Media relationships

#### Media Libraries

```cypher
(media)-[:BELONGS_TO]->(mediaLibrary)
```

Each novie or series can only have one media library. There can be **multiple libraries**, each containing its own media. 
This relationship **prevents users** from getting recommendations to media, which is **located inside media libraries that they do not have access to**.

#### Age restrictions

```cypher
(media)-[:HAS_AGE_RATING {updatedAt: DATETIME}]->(ageRating)
```

Media has an age rating, which helps identify if **a user is old enough to watch specific media**.  
If the movie has a higher age restriction than the user, **then the movie will not be recommended**.

The datetime can be used to see if its **time to fetch new data**, in relation to the age restriction of media.  
It could have changed since the last fetch.

#### External Ratings

```cypher
(media)-[:HAS_EXTERNAL_RATING {sourceType: STRING, score: FLOAT, lastUpdated: DATETIME}]->(externalRatingSource)
```

Media has **ratings from external sources**, such as **IMDb** or **Rotten tomatoes**.  
The sourceType in the relationship is **optional**, since IMDb only has one kind of score, while rotten tomatoes have "**user scores**" and "**critic scores**".  
Therefore IMDb would not have a value for a sourceType, but rotten tomatoes could have the sourceType of "**user scores**".  

The score itself can be **any number, provided by the external rating source**.  
To make it fair, each external rating source has a **max rating value**, which can be used to divide the score into a specific range.  
E.g. 3 of 6 stars = 50 out of 100 = 50% rating.

The lastUpdated datetime is used to keep track of when its time to **request new ratings from the external source**.

### Tags and genres

```cypher
(media)-[:HAS_TAG]->(tag)
(media)-[:HAS_GENRE]->(genre)
```

The relationship between media and tags/genres are pretty straight forward.  
**No data is stored in the relationship**. It is just a simple indicator, that the movie has a specific tag or genre.

#### Language - audio and subtitles

```cypher
(media)-[:HAS_AUDIO_LANGUAGE]->(language)
(media)-[:HAS_SUBTITLE_LANGUAGE]->(language)
```

Media has **relationships to languages**, indicating that they have **audio and/or subtitles** in a specific language.  
There is no data within the relationship.

### Contributors - Actors, director and writers

#### Media

```cypher
(mediaContributor)-[:ACTED_IN]->(media)
(mediaContributor)-[:DIRECTED]->(media)
(mediaContributor)-[:WROTE]->(media)
```

Contributors have relationships to media, **which they contributed to**.  
There is **no data within the relationships themselves**. They are just indicators.

## Constraints
