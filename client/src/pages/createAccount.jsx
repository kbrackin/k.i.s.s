import { Card, Flex, Text, Button, Theme } from "@radix-ui/themes";
import React from 'react';
import * as Form from '@radix-ui/react-form';
import '../style.css';
import * as Separator from '@radix-ui/react-separator';
import * as Tabs from '@radix-ui/react-tabs';

const TabsDemo = () => (
  <div class="fullTarget">
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
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
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="currentPassword">
          Confirm Password
        </label>
        <input type="password" className="Input" id="currentPassword" placeholder="Your password here" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button sky login">Create account</button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
  </div>
);
  
function createAccount() {
return (
<Theme appearance="dark" accentColor="sky" grayColor="slate" radius="full">
  <TabsDemo />
</Theme>
)}

export default createAccount