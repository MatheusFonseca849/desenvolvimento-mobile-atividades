import { Button } from "react-native";

const CustomButton = ({ children, onPress, ...props }) => {
  return (
    <Button title={children} onPress={onPress} {...props} />
  );
};

export default CustomButton