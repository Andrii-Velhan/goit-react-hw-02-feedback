import CounterFeedback from '../src/components/CounterFeedback/CounterFeedback';
// import user from '../src/bd/user.json';

import Statistics from '../src/components/Statistics/Statistics';
import statisticalData from '../src/bd/statistical-data.json';

// import FriendList from '../src/components/FriendList/FriendList';
// import friends from '../src/bd/friends.json';

// import TransactionHistory from '../src/components/TransactionHistory/TransactionHistory';
// import transactions from '../src/bd/transactions.json';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <CounterFeedback
      // name={user.name}
      // tag={user.tag}
      // location={user.location}
      // avatar={user.avatar}
      // stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} /> */}
      {/* <FriendList friends={friends} /> */}
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
}
