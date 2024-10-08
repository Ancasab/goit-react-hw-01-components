import user from '../user.json';
import Profile from './Profile/Profile';
import data from '../data.json';
import Statistics from './Statistics/Statistics';
import friends from '../friends.json'
import FriendList from './FriendList/FriendList';
import transactions from '../transactions';
import TransactionHistory from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        maxWidth: '1200',
        display: 'flex',
        flexDirection: 'column',
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
    />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory tansactions={transactions} />
      

    </div>
  );
};
// propTypes


