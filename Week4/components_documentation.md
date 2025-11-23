# Gold App Dashboard Components Documentation

This document explains the reusable components used in the Gold App Dashboard.

## 1. Header (`components/Header.tsx`)
**Purpose**: Displays the user's greeting and profile information at the top of the screen.
**Props**:
- `userName` (string): The name of the user to display.
- `profileImage` (string, optional): URL for the user's profile picture.
**Key Features**:
- Shows a placeholder avatar with initials if no image is provided.
- Includes a notification bell icon with a badge.

## 2. BalanceCard (`components/BalanceCard.tsx`)
**Purpose**: Shows the user's total gold holdings and current monetary value.
**Props**:
- `goldAmount` (number): Total gold in grams.
- `currentValue` (number): Total value in the specified currency.
- `currencySymbol` (string, optional): Symbol for the currency (default: '$').
**Key Features**:
- Uses `expo-linear-gradient` for a premium gold-themed background.
- Displays a trending icon.

## 3. ActionButtons (`components/ActionButtons.tsx`)
**Purpose**: Provides quick access to primary actions: Buy and Sell.
**Props**:
- `onBuy` (function): Callback for the Buy button.
- `onSell` (function): Callback for the Sell button.
**Key Features**:
- Distinct styling for Buy (Dark) and Sell (Light) buttons.
- Uses icons for better visual cues.

## 4. PriceChart (`components/PriceChart.tsx`)
**Purpose**: Visualizes the gold price trend over time.
**Props**: None (currently uses internal mock data).
**Key Features**:
- Uses `react-native-svg` to draw a smooth curve.
- Includes a gradient fill under the curve.
- Displays time range selectors (1D, 1W, 1M, etc.).

## 5. TransactionList (`components/TransactionList.tsx`)
**Purpose**: Lists recent transactions (buys and sells).
**Props**:
- `transactions` (Array): List of transaction objects.
**Key Features**:
- Uses `FlatList` for efficient rendering.
- Color-coded icons and values (Green for Buy/Positive, Red/Black for Sell/Negative).
