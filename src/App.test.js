import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter: new EnzymeAdapter});

test('renders without catching', () => {
  const wrapper = shallow(<App/>);
  // cosole log the html when we are not sure whats happening in that
  console.log(wrapper.debug());
});

test('renders non-empty component without catching', () => {
  const wrapper = shallow(<App/>);
  // cosole log the html when we are not sure whats happening in that
  expect(wrapper.exists()).toBe(true);
  // assertions to test whatyou areexxpecting about
});