import PropTypes from 'prop-types';

export const StatisticPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.node,
  prefix: PropTypes.string,
  suffix: PropTypes.string
});

export const OrderPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  // Add other order properties as needed
});

export const InventoryItemPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  // Add other inventory item properties as needed
});