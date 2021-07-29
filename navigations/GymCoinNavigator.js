import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginCreateAccountPage from "../pages/LoginCreateAccountPage";
import InviteFriendsPage from "../pages/InviteFriendPage";
import AddPromoCodePage from "../pages/AddPromoCodePage";

const GymCoinNavigator = createStackNavigator(
  {
    AddPromoCodeScreen: {
      screen: AddPromoCodePage,
    },
    InviteFriendScreen: InviteFriendsPage,
    LoginCreateAccountPageScreen: LoginCreateAccountPage,
  },
  {
    headerMode: "none",
    navigationOptions: () => ({
      headerShown: false,
    }),
  }
);

export default createAppContainer(GymCoinNavigator);
