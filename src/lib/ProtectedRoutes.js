import { Navigate } from "react-router-dom";
const Protected = ({ isPremiumUser, children }) => {
  if (!isPremiumUser) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
