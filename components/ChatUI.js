import { useState, useEffect, useRef } from 'react';
import { Textarea, Button, Paper, Group, ScrollArea, Stack, Text } from '@mantine/core';
import { apiCall } from '../lib/api';
import { theme } from '../styles/theme'

function ChatUI() {
  const initialMessage = "I'm LL-tiM, an LLM that can answer any questions you might have about Tim!"
  const botThinking = "Thinking..."
  const userColor = theme.colors.blue[3];
  const botColor = theme.colors.gray[1];
  const [messages, setMessages] = useState([{text: initialMessage, sender: 'bot'}]); // Stores chat messages
  const [input, setInput] = useState(''); // Stores the current input
  const [disabled, setDisabled] = useState(false)
  const scrollAreaRef = useRef(null); // Reference for the ScrollArea

  const handleSend = async () => {
    if (input.trim()) { // trims whitespace from the message
      // Disable the text input area
      setDisabled(true);
      // Add the user's message to the chat
      setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
      const userInput = input;
      setInput(''); // Clear the input field
      
      // Bot thinking time
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: botThinking, sender: 'bot' }]);
      }, 500); // Delay this message so it seems more normal
      // Bot response
      const botResponse = await apiCall(userInput);
      setMessages((prev) => [...prev.slice(0, - 1), { text: botResponse, sender: 'bot' }]);
      setDisabled(false)
    }
  };

  // Scroll to the bottom whenever messages are updated
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  return (
      <Paper>
        <Stack style={{ width: '90%', margin: 'auto', height: '60vh'}}>
          <ScrollArea style={{ flexGrow: 1 }} viewportRef={scrollAreaRef}>
            <Stack spacing="sm">
              {messages.map((message, index) => (
                <Paper
                  key={index}
                  shadow="xs"
                  p="md"
                  style={{
                    alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    backgroundColor: message.sender === 'user' ? userColor : botColor,
                    color: message.sender === 'user' ? 'white' : 'black',
                    maxWidth: '70%',
                  }}
                >
                  <Text>{message.text}</Text>
                </Paper>
              ))}
            </Stack>
          </ScrollArea>

          <Group>
            <Textarea
              placeholder="Ask me anything about Tim!"
              value={input}
              onChange={(event) => setInput(event.currentTarget.value)}
              style={{ flexGrow: 1 }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault();
                  if (!disabled) handleSend();
                }
              }}
              disabled={disabled}
            />
            <Button onClick={handleSend} disabled={disabled}>Send</Button>
          </Group>
        </Stack>
      </Paper>
  );
}

export default ChatUI;
