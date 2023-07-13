const SubsidiaryAccount = ({ account }) => {
    return (
      <div className="subsidaryaccount rounded-md bg-[#9d9d9d7b]">
        <label className="text-left justify-start" htmlFor="Organizationowner">
          Subsidiary Accounts
        </label>
        <div className="flex">
          <span className="rounded-lg">#{account}</span>
          <input type="email" name="email" id="email" />
        </div>
      </div>
    );
  };

  export default SubsidiaryAccount;
  