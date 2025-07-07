import { selectSettingsScope } from '../../../../redux/selectors/settingsSelectors'
import { selectMyUser } from '../../../../redux/selectors/usersSelectors'
import { settingsNavigation } from '../../../navigation/navigationConfig'
import { useLocation, useNavigate } from 'react-router-dom'
import { User } from '../../../../redux/slices/usersSlice'
import ContentSection from '../../sections/ContentSection'
import Thumbnail from '../../common/Thumbnail'
import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import './UserManagementSettingsTab.scss'
import Button from '../../../input/Button'
import Image from '../../common/Image'
import Form from '../../common/Form'

const UserManagementSettingsTab: React.FC = () => {
  const settingsScope = useSelector(selectSettingsScope)
  const urlSearchParameter = useLocation().search
  const myUser = useSelector(selectMyUser)
  const navigate = useNavigate()

  const isAdmin = myUser.role === 'admin'

  const urlUserId = useMemo(
    () => new URLSearchParams(urlSearchParameter).get('userId'),
    [urlSearchParameter]
  )

  const users: User[] = useMemo(() => {
    // TODO: Fetch all users from the store or API
    return [
      {
        id: myUser.id,
        username: myUser.username,
        email: myUser.email,
        role: myUser.role,
        updatedAt: myUser.updatedAt,
        createdAt: myUser.createdAt,
      },
      {
        id: 'Guid-2',
        username: 'Normal User',
        email: 'user@example.com',
        role: 'user',
        updatedAt: '',
        createdAt: '',
      },
    ]
  }, [])

  const selectedUser = useMemo(() => {
    if (isAdmin && urlUserId) {
      return users.find((user) => user.id === urlUserId)
    }
    if (settingsScope === 'user') {
      return myUser
    }
    return undefined
  }, [isAdmin, urlUserId, settingsScope, users, myUser])

  useEffect(() => {
    if (settingsScope !== 'admin') {
      navigate(settingsNavigation.user.path)
    }
  }, [settingsScope, navigate])

  const handleClickOnUser = (userId: string) => {
    navigate(`${settingsNavigation.user.path}?userId=${userId}`)
  }

  // Show overview if no user is selected (admin only)
  const showOverview = isAdmin && settingsScope === 'admin' && !urlUserId

  return (
    <div className='user-management-settings-tab__container'>
      {showOverview ? (
        <ContentSection
          scrollDirection='vertical'
          className='user-management-settings-tab__admin-overview-container'
        >
          <div className='user-management-settings-tab__admin-overview-users'>
            {users.map((user) => (
              <Thumbnail
                key={user.id}
                PrimaryText={user.username}
                SecondaryText={user.role}
                imageUrl=''
                onClick={() => handleClickOnUser(user.id)}
              />
            ))}
          </div>
        </ContentSection>
      ) : (
        <div>
          {selectedUser && (
            <Form
              onSubmit={() => {}}
              className='user-management-settings-tab__form'
              fields={[
                {
                  name: 'username',
                  label: 'Username',
                  type: 'text',
                  errorMessage: 'Username is required',
                },
                {
                  name: 'password',
                  label: 'Password',
                  type: 'password',
                  errorMessage: 'Password is required',
                },
                {
                  name: 'Repeat Password',
                  label: 'Repeat Password',
                  type: 'password',
                },
                {
                  name: 'Age restriction',
                  label: 'Age restriction',
                  type: 'select',
                  dropdownOptions: [
                    { value: 'disabled', label: 'No restriction' },
                    { value: 'g', label: 'G - General Audiences' },
                    { value: 'pg', label: 'PG - Parental Guidance Suggested' },
                    { value: 'pg-13', label: 'PG-13 - Parents Strongly Cautioned' },
                    { value: 'r', label: 'R - Restricted' },
                    { value: 'nc-17', label: 'NC-17 - Adults Only' },
                  ],
                  isAdminOnly: true,
                },
              ]}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default UserManagementSettingsTab
