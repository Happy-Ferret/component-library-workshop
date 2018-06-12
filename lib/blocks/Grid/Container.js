import styled from "styled-components";
import PropTypes from "prop-types";

import { gridScale } from "../../utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => (props.fluid ? 0 : gridScale(0.5))};
`;

Container.propTypes = {
  fluid: PropTypes.bool,
};

/** @component */
export default Container;
