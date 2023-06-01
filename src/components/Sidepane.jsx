import { useEffect, useState } from 'react';

const Sidepane = ({ activeTab, handleTabClick }) => {
  const [currentPath, setCurrentPath] = useState('');

  const renderTabClassName = (tabName) => {
    return `mb-4 ${tabName === activeTab ? 'active border-l-2 border-blue-500' : ''}`;
  };

  const renderSubMenu = (parentTab, children) => {
    if (activeTab === parentTab) {
      return <ul>{children}</ul>;
    }
    return null;
  };

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const getIcon = (tabName) => {
    // Map the tab names to their respective icons
    switch (tabName) {
      case 'compare':
        return <img src="/compare-icon.png" alt="Compare Icon" className="mr-2" />;
      case 'compare-v2':
        return <img src="/compare-v2-icon.png" alt="Compare V2 Icon" className="mr-2" />;
      case 'comp-sets':
        return <img src="/comp-sets-icon.png" alt="Comp Sets Icon" className="mr-2" />;
      case 'manage-stores':
        return <img src="/manage-stores-icon.png" alt="Manage Stores Icon" className="mr-2" />;
      case 'settings':
        return <img src="/settings-icon.png" alt="Settings Icon" className="mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#050b1dbb] h-screen text-white flex flex-col left-0 top-0">
      <ul className="list-none text-center font-semibold">
        <li className={`mb-4 ${renderTabClassName(currentPath)}`}>
          <a
            href="/compare"
            onClick={() => handleTabClick('compare')}
            className="flex items-center"
          >
            {getIcon('compare')}
            Compare
          </a>
        </li>
        <li className={`mb-4 ${renderTabClassName('compare-v2')}`}>
          <a
            href="/compare-v2"
            onClick={() => handleTabClick('compare-v2')}
            className="flex items-center"
          >
            {getIcon('compare-v2')}
            Compare V2 [Beta]
          </a>
        </li>
        <li className={`mb-4 ${renderTabClassName('comp-sets')}`}>
          <a
            href="/competitive_sets"
            onClick={() => handleTabClick('comp-sets')}
            className="flex items-center"
          >
            {getIcon('comp-sets')}
            Comp Sets
          </a>
        </li>
        <li className={`mb-4 ${renderTabClassName('manage-stores')}`}>
          <a onClick={() => handleTabClick('manage-stores')} className="flex items-center cursor-pointer">
            {getIcon('manage-stores')}
            Manage Stores
          </a>
          {renderSubMenu('manage-stores', (
            <>
              <li>
                <a href="/my-stores" onClick={() => handleTabClick('my-stores')} className="ml-4">
                  My Stores
                </a>
              </li>
              <li>
                <a href="/stores-to-monitor" onClick={() => handleTabClick('stores-to-monitor')} className="ml-4">
                  Stores to Monitor
                </a>
              </li>
              <li>
                <a href="/organization-stores" onClick={() => handleTabClick('organization-stores')} className="ml-4">
                  Organization Stores
                </a>
              </li>
            </>
          ))}
        </li>
        <li className={`mb-4 ${renderTabClassName('settings')}`}>
          <a onClick={() => handleTabClick('settings')} className="flex items-center">
            {getIcon('settings')}
            Settings
          </a>
          {renderSubMenu('settings', (
            <li>
              <a href="/reset-password" onClick={() => handleTabClick('reset-password')} className="ml-4">
                Reset Password
              </a>
            </li>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Sidepane;
