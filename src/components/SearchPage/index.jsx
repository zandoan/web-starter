import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import ItemCard from '../ItemCard';
import { RESTAURANT_SEARCH_QUERY } from '../../graphql/queries';

class SearchPage extends Component {
  render() {
    return (
      // Variables can be either lat and lon OR address
      <Query
        query={RESTAURANT_SEARCH_QUERY}
        variables={{
          address: 'Chicago'
        }}
      >
        {({ loading, error, data = {} }) => {
          if (loading) {
            return <CircularProgress />;
          }

          console.log('DO SOMETHING SMART WITH THIS DATA');
          console.log('data', data);
          console.log('error', error);

          // Make sure we have data
          if (
            data.search_restaurants
            && data.search_restaurants.results
            && data.search_restaurants.results.length > 0
          ) {
            return (
              <Grid container>
                <Grid item md={4} sm={12}>
                  {data.search_restaurants.results.map((r) => {
                    return <ItemCard key={r.id} {...r} />;
                  })}
                </Grid>
                <Grid item md={8} sm={false}>
                  Map Space
                </Grid>
              </Grid>
            );
          }

          // No Data Return
          return <div>No Results</div>;
        }}
      </Query>
    );
  }
}

export default SearchPage;
