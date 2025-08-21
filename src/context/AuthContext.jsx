import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        const snap = await getDoc(doc(db, "users", fbUser.uid));
        const profile = snap.exists() ? snap.data() : {};
        setUser({ 
          uid: fbUser.uid,
          email: fbUser.email,
          displayName: fbUser.displayName || profile.name || "User",
          profile,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const signUp = async ({ name, email, password, phone, company, agency }) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);

    if (name) await updateProfile(cred.user, { displayName: name });

    await setDoc(doc(db, "users", cred.user.uid), {
      name,
      email,
      phone,
      company,
      agency,
      createdAt: new Date().toISOString(),
    });

    return {
      uid: cred.user.uid,
      email: cred.user.email,
      displayName: name,
    };
  };

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

