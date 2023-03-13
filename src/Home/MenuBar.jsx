import { MenuBase, Menu, Content, ContentBase} from "./Styled/StyledComponets";
import { Forms } from "./components/Form/index.jsx";

export const MenuBar = () => {
  return (
    <MenuBase>
      <Menu>
        <h1>LLCAMINHOES</h1>
      </Menu>
      <ContentBase>
        <Content>
            <Forms/>
        </Content>
      </ContentBase>
    </MenuBase>
  );
};
