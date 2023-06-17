import Button from "./button";

export default{
    title: "button",
    component: Button,
}

export const DefaultButton = () => <Button>Clik!</Button>;
export const OperatorButton = () => <Button type="operators">Clik!</Button>;
export const EqualButton = () => <Button type="equal">Clik!</Button>;