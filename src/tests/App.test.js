import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import List from '../components/rockets/List';
import store from '../redux/configureStore';
import Navbar from '../components/Navbar';

describe('Testing Rendering', () => {
  test('Rockets rendering check', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <List />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Navbar rendering check', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
