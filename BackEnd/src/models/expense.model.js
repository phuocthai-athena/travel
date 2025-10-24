import mongoose from "mongoose";

/**
 * @typedef {Object} IExpense
 * @property {string} title
 * @property {number} [amount]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & IExpense} IExpenseDocument
 */

/**
 * @type {import("mongoose").Schema<IExpenseDocument>}
 */
const expenseSchema = new mongoose.Schema(
  {
    title: { type: String, maxLength: 500, required: true },
    amount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const ExpenseModel = mongoose.model("Expense", expenseSchema);
export default ExpenseModel;
