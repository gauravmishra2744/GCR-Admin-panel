import React from 'react';
import { Card, Grid, Typography } from '@mui/material';
import { FaUser, FaLayerGroup, FaBox } from 'react-icons/fa';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="admin-home">
      <Grid container spacing={3}>
        {/* Business Profile Section */}
        <Grid item xs={12} md={6}>
          <Card className="profile-card">
            <Typography variant="h5" component="h2">
              Business Profile
            </Typography>
            <div className="card-content">
              <FaUser className="card-icon" />
              <Typography variant="body1">
                Manage and view your business information
              </Typography>
            </div>
          </Card>
        </Grid>

        {/* Business Stacks Section */}
        <Grid item xs={12} md={6}>
          <Card className="stack-card">
            <Typography variant="h5" component="h2">
              Business Stacks
            </Typography>
            <div className="card-content">
              <FaLayerGroup className="card-icon" />
              <Typography variant="body1">
                View and manage your business operations
              </Typography>
            </div>
          </Card>
        </Grid>

        {/* Catalog Management Section */}
        <Grid item xs={12}>
          <Card className="catalog-card">
            <Typography variant="h5" component="h2">
              Catalog Management
            </Typography>
            <div className="card-content">
              <FaBox className="card-icon" />
              <Typography variant="body1">
                Manage your product catalog and inventory
              </Typography>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;