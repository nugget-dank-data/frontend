import  Axios  from "axios";

export default Axios.create({
    baseURL: 'http://127.0.0.1:3000',
    
})



  // const addStoresToOrganization = async (storeIds) => {
  //   try {
  //     const organizationId = 1; 
  //     const token = localStorage.getItem('login_key');
  //     const headers = {
  //       Authorization: `Token ${token}`,
  //     };

  //     const data = {
  //       store: storeIds,
  //       organization: organizationId,
  //     };

  //     const endpoint = 'http://35.229.42.75:420/users/organization-store/';
  //     const response = await axios.post(endpoint, data, { headers: headers });

  //     console.log('Added stores to organization with ID', organizationId);
  //     console.log('Response:', response.data);
  //   } catch (error) {
  //     console.error('Error adding stores to organization:', error);
  //   }
  // };