import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const useActiveTab = () => {
  const query = useQuery();
  const activeTab = query.get('tab') ? query.get('tab') : 'tab1';
  return activeTab;
}

export default useActiveTab;