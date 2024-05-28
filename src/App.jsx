import { Suspense } from 'react'

import AppRoutes from 'components/router/AppRoutes'

const App = () => {
  
  return (
    <Suspense fallback={'Loading...'}>
      <div>
        <AppRoutes />
      </div>
    </Suspense>
  )
}

App.propTypes = {

}

export default App
