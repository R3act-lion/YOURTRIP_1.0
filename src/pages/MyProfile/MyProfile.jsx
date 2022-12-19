import ProfileCont from '../../components/ProfileCont/ProfileCont'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'

export default function MyProfile(props) {
  return (
    <>
      <ProfileInfo you={props.you} />
      <ProfileCont you={props.you} />
    </>
  )
}
