import { useState } from "react";
import twitterLogo from "../icon-twitter.png";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  Wrapper,
  Title,
  Input,
  Error,
  Switcher,
  Form,
} from "../components/auth-components";
import GithubButton from "../components/github-btn";
import PasswordButton from "../components/password-btn";

export default function CreateAccount() {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (isLoading || email === "" || password === "") return;
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      // redirect to the home page
      navigate("/");
    } catch (e) {
      // setError
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
    console.log(email, password);
  };

  return (
    <Wrapper>
      <Title>
        Log into <img src={twitterLogo} width={"42px"} height={"42px"} />
      </Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          required
        />
        <Input
          onChange={onChange}
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          required
        />
        <Input type="submit" value={isLoading ? "Loading..." : "Log in"} />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        Don't have an account? {""}
        <Link to="/create-account">Create One &rarr;</Link>
      </Switcher>
      <GithubButton />
      <PasswordButton />
    </Wrapper>
  );
}
