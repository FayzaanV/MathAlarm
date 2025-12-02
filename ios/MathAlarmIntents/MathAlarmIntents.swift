//
//  MathAlarmIntents.swift
//  MathAlarmIntents
//
//  Created by Matthew Lundeen on 12/1/25.
//

import AppIntents

struct MathAlarmIntents: AppIntent {
    static var title: LocalizedStringResource { "MathAlarmIntents" }
    
    func perform() async throws -> some IntentResult {
        return .result()
    }
}
