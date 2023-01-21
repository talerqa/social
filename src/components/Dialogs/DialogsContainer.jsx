import Dialogs from "./Dialogs";
import {
  updateNewMessageBodyCreate,
  sendMessageCreate,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBodyCreate: (body) => {
      dispatch(updateNewMessageBodyCreate(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreate());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
