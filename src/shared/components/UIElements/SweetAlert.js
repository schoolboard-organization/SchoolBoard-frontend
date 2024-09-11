import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./SweetAlert.css";
function SweetAlert(props) {
  const MySwal = withReactContent(Swal);
  return MySwal.fire({
    width: props.width,
    color: props.color,
    title: props.title,
    text: props.text,
    icon: props.icon,
    showConfirmButton: props.showConfirmButton,
    timer: props.timer,
    customClass: { confirmButton: "custom-confirm-btn" },
    background: props.background,
    didClose: props.didClose,
  });
}

export default SweetAlert;
