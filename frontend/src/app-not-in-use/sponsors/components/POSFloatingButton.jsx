import React from 'react';
import { Fab, Tooltip, styled, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Example icon

// Container for the entire page content with limited max width
const PageContainer = styled(Box)({
  maxWidth: "var(--size-content)", // Constraint for the page content width
  margin: 'auto', // Center content on the page
  padding: '20px', // Add some padding for spacing
});

// Styled component for positioning the FAB
const FloatingButtonContainer = styled('div')({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000, // Ensures it's above other content
});

// Styled FAB with the same background color as the button from previous code
const CustomFab = styled(Fab)(({ theme }) => ({
  backgroundColor: '#022D41', // Same dark blue color
  color: '#ffffff', // White icon color
  '&:hover': {
    backgroundColor: '#035A74', // Same hover effect
  },
}));

const POSFloatingButton = () => {
  return (
    <PageContainer>
      {/* Your page content goes here */}
      <div>Your page content here</div>
      
      {/* Floating Action Button */}
      <FloatingButtonContainer>
        <Tooltip title="Open Point of Sale" arrow>
          <CustomFab aria-label="pos">
            <ShoppingCartIcon />
          </CustomFab>
        </Tooltip>
      </FloatingButtonContainer>
    </PageContainer>
  );
};

export default POSFloatingButton;
