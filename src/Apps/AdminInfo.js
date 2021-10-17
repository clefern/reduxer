const Info = (props) => (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
);

const withAdiminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}
  
const requiredAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isLogged && <p>Make login!</p>}
            {props.isLogged && <p>Welcome {props.user}!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}
  
export const AdminInfo = withAdiminWarning(Info);
export const AuthInfo = requiredAuthentication(Info);