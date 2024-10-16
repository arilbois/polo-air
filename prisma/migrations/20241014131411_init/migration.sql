-- AlterTable
ALTER TABLE "FlightSeat" ALTER COLUMN "isBooked" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "tokenMidtrans" DROP NOT NULL;
