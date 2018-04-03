import { connect } from 'redux';
import { logout, login } from '../../actions/session_actions';
import Greeting from './Greeting'

const mapStateToProps = ({sesssion}) => ({
  currentUser: session.currentUser;
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout(currentUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
