import user from '../user.json';
import Profile from './Profile';
import data from '../data.json';
import Statistics from './Statistics';
import friends from '../friends.json'
import FriendList from './FriendList';
import transactions from '../transactions';
import TransactionHistory from './TransactionHistory';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />;
      <Statistics title="Upload stats" stats={data} />;
      <FriendList friends={friends} />;
      <TransactionHistory tansactions={transactions} />;
      

      {/* React homework template */}
    </div>
  );
};
// propTypes


