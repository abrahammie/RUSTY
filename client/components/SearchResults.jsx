import React from 'react';
import axios from 'axios';
import BusinessMini from './BusinessMini.jsx';
import SearchMenu from './SearchMenu.jsx';

class SearchResults extends React.component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/businesses')
      .then((response) => {
        console.log('SEARCH_RESULTS DID MOUNT:', response);
        this.addBusinesses(response.businesses);
      })
      .catch((error) => {
        console.log('ERROR ON SEACH_RESULTS DID MOUNT:', error);
      });
  }

  addBusinesses(businesses) {
    this.setState({ businesses });
  }
  render() {
    return (
      <div>
        <div>
          <SearchMenu />
        </div>
        <div>
          { this.state.map((business) => {
            <BusinessMini
              business={business}
              key={business._id}
              businessName={business.businessName}
              businessCategory={business.businessCategory}
              profileImg={business.profileImg} />
            })
          };
        </div>
      </div>
    );
  }
}


export default SearchResults;