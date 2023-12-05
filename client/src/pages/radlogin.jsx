import { Outlet } from "react-router-dom";
​
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from 'react';
import * as Separator from '@radix-ui/react-separator';
import * as Tabs from '@radix-ui/react-tabs';
import '../assets/style.css';
​
const TabsDemo = () => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        Account
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        Password
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
      <p className="Text">Make changes to your account here. Click save when you're done.</p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Name
        </label>
        <input className="Input" id="name" placeholdere="Pedro Duarte" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Username
        </label>
        <input className="Input" id="username" defaultValue="@peduarte" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Username
        </label>
        <input className="Input" id="username" defaultValue="@peduarte" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button orange create">Create account</button>
        <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: '0 15px' }}
      />
        <button className="Button orange login">Sign in</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab2">
      <p className="Text">Change your password here. After saving, you'll be logged out.</p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="currentPassword">
          Current password
        </label>
        <input className="Input" id="currentPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="newPassword">
          New password
        </label>
        <input className="Input" id="newPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="confirmPassword">
          Confirm password
        </label>
        <input className="Input" id="confirmPassword" type="password" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button orange">Change password</button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);
​
function homePage() {
  return (
    <>
      <TabsDemo />
      <p>Home</p>
      <div id="detail"></div>
      <Outlet />
    </>
  );
}
​
export default homePage;