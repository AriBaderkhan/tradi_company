
CLINIC MANAGEMENT SYSTEM - RECEPTIONIST MANUAL & SYSTEM ANALYSIS
============================================================

INTRODUCTION: YOUR ROLE
-----------------------
Welcome to the Clinic Management System. This guide explains exactly how to run the Front Desk.
It is written in simple language so anyone can use it, but it details every "behind the scenes" connection.

---

PART 1: THE "PATIENT FOLDER" CONCEPT (THE CORE)
-----------------------------------------------
The most important concept in this system is that **"Each Patient is a Folder."**
Imagine a physical file cabinet. When you click on a patient, you open their Folder. Inside, there are **Tabs** just like paper dividers.

1. **Appointments Tab**: The history of when they visited.
2. **Sessions Tab**: The detailed notes of what the doctor performed.
3. **Payments Tab**: A list of every transaction (money in).
4. **Treatment Plans Tab**: The contracts for long-term work.

**ANALYSIS NOTE**: You can check the "Treatment Plans" tab at any time to see if a patient owes money on a big contract (like Braces). The system calculates "Total Agreed" minus "Total Paid" automatically.

---

PART 2: HOW WORK IS CREATED (SESSION VISUALIZATION)
---------------------------------------------------
This explains how the doctor's work appears on your screen as a bill.

There are two main types of work:

**(A) NORMAL SESSIONS (Single Visit)**
- **How it is done**: The doctor clicks "Finish", selects a simple work (like "Cleaning"), and clicks Save.
- **How it shows to you**: It appears instantly in your "Sessions Waiting for Payment" box.
- **Logic**: The system calculates `Price of Work x Quantity`. Simple math.

**(B) TREATMENT PLANS (Long-Term Contracts)**
- **How it is done**:
  1. The doctor selects a major work (like "Metal Braces").
  2. The system **automatically checks** if an Active Plan exists.
  3. If NO plan exists, a Yellow Box appears on the doctor's screen asking for an "Agreed Total Price".
  4. The doctor enters the total price (e.g., 2,000,000 IQD) and clicks Save.
- **How it shows to you**:
  - In the "Sessions Waiting for Payment" box, you will see "Installment".
  - In the "Patient Folder -> Treatment Plans" tab, you will see a new row showing:
    *   **Agreed**: 2,000,000
    *   **Paid**: 0 (initially)
    *   **Remaining**: 2,000,000
- **Logic**: The system links every future payment for "Braces" to this specific contract until the 2,000,000 is fully paid. This prevents the patient from being overcharged or undercharged.

---

PART 3: THE DASHBOARD (YOUR COMMAND CENTER)
-------------------------------------------
[LEFT SIDE] -> THE SCHEDULE
1. Today's Appointments List: Shows ACTIVE people.
   - **Connection**: When a doctor finishes, the patient vanishes from here.

[RIGHT SIDE] -> THE FINANCIAL ZONE
1. **Sessions Waiting for Payment**:
   - This is your "Inbox" for bills.
   - **Action**: Click the Green "PAY" button.
   - **System Check**: If the payment is part of a Plan, the system automatically updates the "Remaining Balance" in the background. You don't need to use a calculator.

---

PART 4: THE WORKFLOW (A TO Z)
-----------------------------

STEP 1: BOOKING & ARRIVAL
- Go to Appointments -> Add. (System checks conflicts).
- When they arrive: Dashboard -> Click Status -> "Checked In". (Doctor is notified instantly).

STEP 2: THE SESSION (HANDOFF)
- Patient is with the doctor.
- You see them in the "In Progress" box.
- **Analysis**: If the doctor creates a Treatment Plan now, the database creates a "Lock" on that treatment type for this patient.

STEP 3: PAYMENT & CHECKOUT
- Patient appears in "Sessions Waiting for Payment".
- Click "PAY".
- **Visual Aid**: You will see "Total" and "Min Total".
- Enter the Cash Amount.
- Click Confirm.

---

SUMMARY SCRIPT FOR DEMO
-----------------------
1. **Open a Patient Folder**: "Here we see the full history. The tabs show us everything from appointments to complex treatment plans in one view."
2. **Show a Treatment Plan**: "For example, this patient has an Ortho plan. We can see the Agreed Total is 2M, and they have 500k remaining. The system tracks this automatically."
3. **Go to Dashboard**: "Here is our traffic control. I can see who is with the doctor right now."
4. **Process a Payment**: "The doctor just finished. The bill pops up here. I click Pay, and the daily report updates instantly."
