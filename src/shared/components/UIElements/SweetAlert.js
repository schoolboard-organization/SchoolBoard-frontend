import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./SweetAlert.css";
function SweetAlert(props) {
  // from sweetalert2 import, used for error modal
  const MySwal = withReactContent(Swal);
  console.log("ON OR NOT:", props.showConfirmButton); // This should output false when intended
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

/**
 * let timerInterval;
// Swal.fire({
//   title: "Auto close alert!",
//   html: "I will close in <b></b> milliseconds.",
//   timer: 2000,
//   timerProgressBar: true,
//   didOpen: () => {
//     Swal.showLoading();
//     const timer = Swal.getPopup().querySelector("b");
//     timerInterval = setInterval(() => {
//       timer.textContent = `${Swal.getTimerLeft()}`;
//     }, 100);
//   },
//   willClose: () => {
//     clearInterval(timerInterval);
//   }
// }).then((result) => {
//   /* Read more about handling dismissals below */
// //   if (result.dismiss === Swal.DismissReason.timer) {
// //     console.log("I was closed by the timer");
// //   }
// // });
//  */
