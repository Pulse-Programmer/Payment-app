import Signup from "./Signup";
import History from "./History";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

function Home() {
  return (
    <div>
      <h1 className="font-serif text-center font-semibold text-2xl">
        <AccessAlarmIcon />
        Home
      </h1>
      <History />

      {/* <Signup /> */}
    </div>
  );
}

export default Home;
