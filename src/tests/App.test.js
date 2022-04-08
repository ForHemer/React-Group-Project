import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import {
  render, waitFor, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from '../components/rockets/List';
import store from '../redux/configureStore';
import Navbar from '../components/Navbar';
import MissionList from '../components/missions/MissionsList';
import Profile from '../components/profile/MyProfile';
import App from '../App';

describe('Testing Rendering', () => {
  test('Rockets rendering check', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <List />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Missions rendering check', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MissionList />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Profile rendering check', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Profile />
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

  test('loads and displays reserved', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const button = await screen.findAllByText('Reserve Rocket');
    userEvent.click(button[0]);

    await waitFor(() => screen.getByText('Cancel reservation'));
    expect(screen.getByText('Cancel reservation')).toBeDefined();
  });
});
