import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const eventsFilePath = path.join(process.cwd(), 'src/data/events.json');

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  category: 'social' | 'workshop' | 'tasting' | 'other';
}

function readEvents(): Event[] {
  try {
    const data = fs.readFileSync(eventsFilePath, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeEvents(events: Event[]): void {
  fs.writeFileSync(eventsFilePath, JSON.stringify(events, null, 2));
}

// GET - Fetch all events
export async function GET() {
  const events = readEvents();
  return NextResponse.json(events);
}

// POST - Create a new event
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const events = readEvents();
    
    const newEvent: Event = {
      id: Date.now().toString(),
      title: body.title,
      date: body.date,
      time: body.time,
      location: body.location,
      description: body.description,
      image: body.image || '',
      category: body.category || 'other',
    };
    
    events.push(newEvent);
    writeEvents(events);
    
    return NextResponse.json(newEvent, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}

// PUT - Update an event
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const events = readEvents();
    
    const index = events.findIndex((e) => e.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
    
    events[index] = {
      ...events[index],
      ...body,
    };
    
    writeEvents(events);
    
    return NextResponse.json(events[index]);
  } catch {
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 });
  }
}

// DELETE - Delete an event
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Event ID required' }, { status: 400 });
    }
    
    const events = readEvents();
    const filteredEvents = events.filter((e) => e.id !== id);
    
    if (filteredEvents.length === events.length) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
    
    writeEvents(filteredEvents);
    
    return NextResponse.json({ message: 'Event deleted' });
  } catch {
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
  }
}

