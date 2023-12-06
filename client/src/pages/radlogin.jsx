import { Outlet } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from 'react';
import * as Separator from '@radix-ui/react-separator';
import * as Tabs from '@radix-ui/react-tabs';
import '../style.css';

const TabsDemo = () => (
  <div class="fullTarget">
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        Ask a Question
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        Give an Answer
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
      <p className="Text">Need to ask a question? Log in or create an account here!</p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Username
        </label>
        <input className="Input" id="username" placeholder="Username" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="currentPassword">
          Password
        </label>
        <input type="password" className="Input" id="currentPassword" placeholder="Your password here" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'space-between' }}>
        <a href="/createAccount">
        <button className="Button sky create">Create account</button>
        </a>
        <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: '0 15px' }}
      />
        <button className="Button sky login">Sign in</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab2">
      <p className="Text">Want to answer another user's question? Log in here!</p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="newPassword">
          Username
        </label>
        <input className="Input" id="username" placeholder="Username" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="confirmPassword">
          Password
        </label>
        <input className="Input" id="confirmPassword" type="password" placeholder="Your password here"/>
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button sky">Sign in</button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
  </div>
);

function radLogin() {
  return (
    <>
      <TabsDemo />
      <div id="detail"></div>
      <Outlet />
    </>
  );
}

export default radLogin;