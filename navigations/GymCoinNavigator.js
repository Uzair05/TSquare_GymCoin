import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginCreateAccountPage from "../pages/LoginCreateAccountPage";
import InviteFriendsPage from "../pages/InviteFriendPage";
import AddPromoCodePage from "../pages/AddPromoCodePage";
import LandingPage from "../pages/LandingPage";
import StartExcercise from "../pages/StartExcercise";

const GymCoinNavigator = createStackNavigator(
  {
    LandingPageScreen: {
      screen: LandingPage,
    },
    AddPromoCodeScreen: {
      screen: AddPromoCodePage,
    },
    InviteFriendScreen: InviteFriendsPage,
    LoginCreateAccountPageScreen: LoginCreateAccountPage,
    StartExcerciseScreen: StartExcercise,
  },
  {
    headerMode: "none",
    navigationOptions: () => ({
      headerShown: false,
    }),
  }
);

export default createAppContainer(GymCoinNavigator);
