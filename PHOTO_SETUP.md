# Lanyard Component Setup

## Your photo is already configured! 🎉

Your photo (`mitadru-photo.jpg`) has been detected in the `public/images/` folder and is automatically being used in the new Lanyard component.

## About the Lanyard Component:

The Lanyard component is inspired by Discord's real-time status system and creates a beautiful 3D card showing:

### ✨ **Features:**
- **3D Card Effect**: Tilts and rotates on hover for depth
- **Discord-style Status**: Shows online/away/busy/offline status
- **Real Avatar**: Uses your uploaded photo
- **Activity Display**: Shows current coding activity
- **Animated Elements**: Subtle floating dots and glow effects
- **Responsive Design**: Adapts to mobile and desktop

### 🎨 **Visual Design:**
- **Dark Theme**: Slate background with gradient overlays
- **Status Colors**: 
  - 🟢 Online (Green)
  - 🟡 Idle/Away (Yellow) 
  - 🔴 Do Not Disturb (Red)
  - ⚫ Offline (Gray)
- **3D Perspective**: Card rotates on hover for depth effect
- **Glow Effects**: Blue/cyan accent colors with animated borders
- **Typography**: Clean, modern font hierarchy

### 📱 **Current Configuration:**
```tsx
<Lanyard
  avatarUrl="/images/mitadru-photo.jpg"  // ✅ Your photo
  name="Mitadru Roy"                     // Your name
  status="online"                        // Current status
  userId="your-discord-user-id"          // Discord ID (optional)
/>
```

## 🔧 **To Connect Real Discord Status:**

If you want to show your actual Discord status, you'll need to:

1. **Get your Discord User ID**:
   - Enable Developer Mode in Discord
   - Right-click your profile → Copy ID

2. **Update the component**:
   - Replace `"your-discord-user-id"` with your actual Discord ID
   - Uncomment the API fetch code in the Lanyard component

3. **Real-time Updates**:
   - The component will automatically fetch your Discord status
   - Shows your actual activities, Spotify listening, etc.

## 🎯 **Current Demo Features:**

- Shows "Online" status with green indicator
- Displays your photo in a circular frame with status ring
- Activity shows "Building amazing web experiences"
- Username displays as "@mitadru17"
- 3D hover effects and animations

The component is now perfectly integrated into your hero section and uses your actual photo!
