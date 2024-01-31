import { useDispatch, useSelector } from "react-redux/"
import { sendNotification, clearNotification } from "../reducers/notificationReducer"
const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: notification.isVisible ? 'block' : 'none'
  }
  return (
    <div style={style}>
      {notification.message}
    </div>
  )
}

export default Notification