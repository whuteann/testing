import { useBreakpoints, setBreakpoints} from "dripsy";
import { View } from 'react-native'
import { styled } from "@dripsy/core";

    const Desktop = styled(View)({
        flex: 1 ,
        bg:['primary', 'background', 'other'],
    })
  
  export {
      Desktop,
  }