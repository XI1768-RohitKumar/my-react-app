import React from 'react';

class registration extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <div class="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" class="form-control" id="name" />
                </div>
                <div class="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" />
                </div>
                <div class="mb-3">
                    <label for="zipcode" className="form-label">Zip code</label>
                    <input type="password" class="form-control" id="zipcode" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </React.Fragment>
        );
    }
}
 
export default registration;
