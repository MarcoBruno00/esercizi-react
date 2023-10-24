import { UseLogin } from "./useLOgin"


export function Login() {
   
   const {formData , handleChange , handleSubmit} = UseLogin()
   
   return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Invio</button>
      </form>
    </>
  );
}