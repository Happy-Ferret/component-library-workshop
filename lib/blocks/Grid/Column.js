import styled from "styled-components";
import PropTypes from "prop-types";

import { gridScale } from "../../utils";

const Column = styled.div`
  display: flex;
  flex: ${props => props.flex};
  padding: ${gridScale(0.5)};
`;

Column.propTypes = {
  flex: PropTypes.string,
};

Column.defaultProps = {
  flex: "initial"
};

/** @component */
export default Column;
