// lazy loading
const OtherComponent = React.lazy(() => import('./Hello'));

function MyComponent() {
  return (
    <div>
      <OtherComponent />
    </div>
  );
}