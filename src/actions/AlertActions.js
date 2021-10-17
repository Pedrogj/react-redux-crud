import { VIEW_ALERT, HIDE_ALERT } from "../types";

// muestra alerta
export function viewAlert(alert) {
  return (dispatch) => {
    dispatch(createAlert(alert));
  };
}

const createAlert = (alert) => ({
  type: VIEW_ALERT,
  payload: alert,
});

// ocultar alerta
export function hideAlertAction() {
  return (dispatch) => {
    dispatch(hideAlert());
  };
}

const hideAlert = () => ({
  type: HIDE_ALERT,
});
