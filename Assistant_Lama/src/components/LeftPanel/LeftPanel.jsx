import { useEffect, useState } from "react";

import {
  Panel,
  Title,
  Card,
  CardTitle,
  CardValue,
  Divider,
  StatusDot,
} from "./LeftPanelStyles";

const API = "http://localhost:5000/api/system";

function LeftPanel() {

  const [system, setSystem] = useState({
    cpu: "...",
    totalMemory: "...",
    freeMemory: "...",
    os: "...",
    platform: "...",
    hostname: "...",
    uptime: "..."
  });

  const [status, setStatus] = useState("Offline");

  const loadSystem = async () => {

    try {

      const res = await fetch(API);

      const data = await res.json();

      if (data.success) {

        setSystem(data.system);

        setStatus("Online");

      }

    } catch (err) {

      console.log(err);

      setStatus("Offline");

    }

  };

  useEffect(() => {

    loadSystem();

    const interval = setInterval(loadSystem,5000);

    return ()=>clearInterval(interval);

  },[]);

  return (

    <Panel>

      <Title>SYSTEM STATUS</Title>

      <Divider />

      <Card>

        <CardTitle>CPU</CardTitle>

        <CardValue>{system.cpu}</CardValue>

      </Card>

      <Card>

        <CardTitle>Total RAM</CardTitle>

        <CardValue>{system.totalMemory}</CardValue>

      </Card>

      <Card>

        <CardTitle>Free RAM</CardTitle>

        <CardValue>{system.freeMemory}</CardValue>

      </Card>

      <Card>

        <CardTitle>Operating System</CardTitle>

        <CardValue>{system.os}</CardValue>

      </Card>

      <Card>

        <CardTitle>Platform</CardTitle>

        <CardValue>{system.platform}</CardValue>

      </Card>

      <Card>

        <CardTitle>Hostname</CardTitle>

        <CardValue>{system.hostname}</CardValue>

      </Card>

      <Card>

        <CardTitle>Uptime</CardTitle>

        <CardValue>{system.uptime}</CardValue>

      </Card>

      <Divider />

      <Title>VOICE STATUS</Title>

      <Card>

        <CardTitle>Assistant</CardTitle>

        <CardValue>

          <StatusDot online={status==="Online"} />

          {status}

        </CardValue>

      </Card>

    </Panel>

  );

}

export default LeftPanel;